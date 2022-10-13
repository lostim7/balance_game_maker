import React from "react";

function Make() {
    const [value, setValue] = React.useState('asd')
    return (
        <div>
            <form>
                <div>
                    <label>제목</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>제목</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>제목</label>
                    <input type="text"></input>
                </div>
            </form>
        </div>
    )
}

export default Make;