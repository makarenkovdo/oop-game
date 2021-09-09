import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

export interface GameState {
    startStatus: boolean
    difficultyStatus: number
    heroName: string
    level: number
    gameOverStatus: boolean

    heroPosition: number[]
    botPosition: number[]
    bot2Position: number[]

    botSize: number[]
    heroSize: number[]
    itemSize: number[]
    bot2Size: number[]

    bulletPosition: number[]
    bulletState: boolean
    bulletSize: number[]

    exitPosition: number[]
    keyPosition: number[]
    boosterPosition: number[]
    pauseStatus: boolean
    saveStatus: boolean
    boosterStatus: boolean
    keyForExit: boolean
}

export const initialState: GameState = {
    startStatus: false,
    difficultyStatus: 0,
    heroName: "Ordinary Hero",
    level: 1,
    gameOverStatus: false,

    heroPosition: [20, 60],
    botPosition: [500, 500],
    bot2Position: [500, 500],

    heroSize: [],
    itemSize: [],

    bot2Size: [],
    botSize: [],

    bulletPosition: [],
    bulletState: false,
    bulletSize: [],

    exitPosition: [],
    keyPosition: [0, 0],
    boosterPosition: [0, 0],

    pauseStatus: false,
    saveStatus: false,

    boosterStatus: false,
    keyForExit: false,
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        difficultyStatusAction: (state, action: PayloadAction<number>) => {
            state.difficultyStatus = action.payload
        },
        heroNameAction: (state, action: PayloadAction<string>) => {
            state.heroName = action.payload
        },
        startStatusAction: (state) => {
            state.startStatus = true
        },

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

        keyForExitAction: (state, action: PayloadAction<boolean>) => {
            state.keyForExit = action.payload
        },
        boosterStatusAction: (state, action: PayloadAction<boolean>) => {
            state.boosterStatus = action.payload
        },

        heroMoveAction: (state, action: PayloadAction<number[]>) => {
            state.heroPosition = action.payload
        },
        heroSizeInitAction: (state, action: PayloadAction<number[]>) => {
            state.heroSize = action.payload
        },
        itemSizeInitAction: (state, action: PayloadAction<number[]>) => {
            state.itemSize = action.payload
        },

        bulletSizeInitAction: (state, action: PayloadAction<number[]>) => {
            state.bulletSize = action.payload
        },
        bulletMoveAction: (state, action: PayloadAction<number[]>) => {
            state.bulletPosition = action.payload
        },
        bulletStateAction: (state, action: PayloadAction<boolean>) => {
            state.bulletState = action.payload
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
        boosterSetPositionAction: (state, action: PayloadAction<number[]>) => {
            state.boosterPosition = action.payload
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
    difficultyStatusAction,
    levelUpAction,
    gameOverAction,
    pauseStatusAction,
    startStatusAction,

    heroMoveAction,
    heroSizeInitAction,
    heroNameAction,
    botMoveAction,
    botSizeInitAction,
    bot2MoveAction,
    bot2SizeInitAction,

    loadStateAction,
    saveAction,
    keyForExitAction,
    keyPositionSetPositionAction,
    exitSetPositionAction,
    boosterSetPositionAction,
    boosterStatusAction,
    itemSizeInitAction,

    bulletSizeInitAction,
    bulletMoveAction,
    bulletStateAction,
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
