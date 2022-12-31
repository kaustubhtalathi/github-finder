import AlertContext from "../../context/alert/AlertContext";
import { useContext } from "react";

function Alert() {
    const { alert } = useContext(AlertContext);

    return (
        alert !== null && (
            <p className="flex items-start mb-4 space-x-2">
                {alert.type === "error" && "Error"}
                <p className="flex-1 text-base font-semigold leading-7 text-white">
                    <strong>{alert.msg}</strong>
                </p>
            </p>
        )
    );
}

export default Alert;
