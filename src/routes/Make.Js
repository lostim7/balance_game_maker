import React from "react";

function Make() {
    const [value, setValue] = React.useState('asd')
    return (
        <div className="wide upbo">
            <div class="mb-3">
                 <label for="select1" class="form-label">선택지 1</label>
                 <input type="text" class="form-control" id="select1" placeholder="가지볶음" />
            </div>
            <div class="mb-3">
                <label for="select1Message" class="form-label">골랐을때 표시할 메세지</label>
                <textarea class="form-control" id="select1Message" rows="3"></textarea>
            </div>
            <div class="mb-3">
                 <label for="select2" class="form-label">선택지 2</label>
                 <input type="text" class="form-control" id="select2" placeholder="코다리강정" />
            </div>
            <div class="mb-3">
                <label for="select2Message" class="form-label">골랐을때 표시할 메세지</label>
                <textarea class="form-control" id="select2Message" rows="3"></textarea>
            </div>
        </div>
    )
}

export default Make;