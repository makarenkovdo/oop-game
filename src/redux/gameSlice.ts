import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

export interface GameState {
    level: number
    gameOverStatus: boolean
    heroPosition: number[]
    botPosition: number[]
    botSize: number[]
    bot2Position: number[]
    bot2Size: number[]
    exitPosition: number[]
    keyPosition: number[]
    startStatus: boolean
    pauseStatus: boolean
    saveStatus: boolean
    keyForExit: boolean
}

export const initialState: GameState = {
    level: 1,
    gameOverStatus: false,
    heroPosition: [20, 60],
    botPosition: [500, 500],
    botSize: [0, 0],
    bot2Position: [500, 500],
    bot2Size: [0, 0],
    exitPosition: [],
    keyPosition: [0, 0],
    pauseStatus: false,
    saveStatus: false,
    startStatus: false,
    keyForExit: false,
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        levelUpAction: (state) => {
            state.level += 1
        },

        gameOverAction: (state, action: PayloadAction<boolean>) => {
            state.gameOverStatus = action.payload
        },
        saveAction: (state, action: PayloadAction<boolean>) => {
            state.saveStatus = action.payload
        },
        pauseStatusAction: (state, action: PayloadAction<boolean>) => {
            state.pauseStatus = action.payload
        },
        startStatusAction: (state) => {
            state.startStatus = true
        },
        keyForExitAction: (state, action: PayloadAction<boolean>) => {
            console.log("keyReducer")

            state.keyForExit = action.payload
        },
        heroMoveAction: (state, action: PayloadAction<number[]>) => {
            state.heroPosition = action.payload
            console.log("heroReducer")
            console.log(action.payload)
        },
        botMoveAction: (state, action: PayloadAction<number[]>) => {
            state.botPosition = action.payload
        },
        bot2MoveAction: (state, action: PayloadAction<number[]>) => {
            state.bot2Position = action.payload
        },
        botSizeInitAction: (state, action: PayloadAction<number[]>) => {
            state.botSize = action.payload
        },
        bot2SizeInitAction: (state, action: PayloadAction<number[]>) => {
            state.bot2Size = action.payload
        },
        keyPositionSetPositionAction: (
            state,
            action: PayloadAction<number[]>
        ) => {
            state.keyPosition = action.payload
        },
        exitSetPositionAction: (state, action: PayloadAction<number[]>) => {
            state.exitPosition = action.payload
        },

        loadStateAction: (state, action: PayloadAction<GameState>) => {
            state.heroPosition = action.payload.heroPosition

            state.botPosition = action.payload.botPosition
            state.bot2Position = action.payload.bot2Position

            state.gameOverStatus = action.payload.gameOverStatus
            state.saveStatus = action.payload.saveStatus
            state.level = action.payload.level

            state.bot2Size = action.payload.bot2Size
            state.botSize = action.payload.botSize

            state.keyPosition = action.payload.keyPosition
            state.exitPosition = action.payload.exitPosition

            // state = action.payload
        },
    },
})

export const {
    levelUpAction,
    gameOverAction,
    heroMoveAction,
    botMoveAction,
    keyPositionSetPositionAction,
    exitSetPositionAction,
    botSizeInitAction,
    bot2MoveAction,
    bot2SizeInitAction,
    loadStateAction,
    saveAction,
    pauseStatusAction,
    startStatusAction,
    keyForExitAction,
} = gameSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectHeroPosition = (state: RootState) => state.game.heroPosition
export const selectLevel = (state: RootState) => state.game.level
export const selectGameOverStatus = (state: RootState) =>
    state.game.gameOverStatus
export const selectBotPosition = (state: RootState) => state.game.botPosition
export const selectItemPosition = (state: RootState) => state.game.keyPosition
export const selectExitPosition = (state: RootState) => state.game.exitPosition

// export const incrementIfOdd = (amount: number) => (
//   dispatch,
//   getState
// ) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default gameSlice.reducer
