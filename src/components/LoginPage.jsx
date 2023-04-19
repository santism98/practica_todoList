

export const LoginPage = () => {

    return (
        <>

            <div className="login flex text-center justify-text">

                <form>

                    <input

                        type="text"
                        placeholder="Usuario"
                        name="task"

                    />

                    <input

                        type="text"
                        placeholder="Contraseña"
                        name="description"

                    />

                    <input

                        type="submit"
                        value="Log in"

                    />



                </form>

            </div>
        </>
    )
}
