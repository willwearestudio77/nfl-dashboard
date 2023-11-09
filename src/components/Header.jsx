import BasicDatePicker from "./CalDatePicker"
function Header() {
    return (
        <header>
            <div className="dashboard-header">
                <h1>The NFL Dashboard</h1>
            </div>
            <div>
        <BasicDatePicker/>
        </div>
        </header>
    )
}
export default Header