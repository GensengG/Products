import "../App.jsx";

export const IconSwitch = (stateSwitch) => {
    const {stateBtn} = stateSwitch;
    
    let resultBtn = <></>;

    if(stateBtn === "Переключаем на список") {35
        resultBtn = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="45px" viewBox="0 0 24 24" width="45px" fill="#434343"><rect fill="none" height="25" width="25"/><path d="M3,14h4v-4H3V14z M3,19h4v-4H3V19z M3,9h4V5H3V9z M8,14h13v-4H8V14z M8,19h13v-4H8V19z M8,5v4h13V5H8z"/></svg>;
    } else {
        resultBtn = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="45px" viewBox="0 0 24 24" width="45px" fill="#434343"><rect fill="none" height="25" width="25"/><g><path d="M14.67,5v6.5H9.33V5H14.67z M15.67,11.5H21V5h-5.33V11.5z M14.67,19v-6.5H9.33V19H14.67z M15.67,12.5V19H21v-6.5H15.67z M8.33,12.5H3V19h5.33V12.5z M8.33,11.5V5H3v6.5H8.33z"/></g></svg>;
    }   

    return (
        <>
            {resultBtn}
        </>
    );
    
}