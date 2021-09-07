//Facade implementation

export default function MainMenu() {
    return (
        <div>
            <form id='form'>
                <div>
                    <input onSelect type='radio' name='age' value='10' />
                    Easy
                </div>
                <div>
                    <input type='radio' name='age' value='10' />
                    Normal
                </div>
                <div>
                    <input type='radio' name='age' value='10' />
                    Hard
                </div>

                <fieldset name='userFields'>
                    <legend>info</legend>
                    <input name='login' type='text' />
                </fieldset>
            </form>
        </div>
    )
}
