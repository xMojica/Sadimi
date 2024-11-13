import React, { useContext } from "react";
import Alert from '@mui/material/Alert';
import { Context } from "../../Context/main";
import CheckIcon from '@mui/icons-material/Check';


function Alerta({ tipo, mensaje }) {
    const { open, setOpen } = useContext(Context);

    if (tipo == "Correcto") {
        return (
            open &&
            <Alert
                icon={<CheckIcon fontSize="inherit" />}
                severity="success"
                onClose={() => { setOpen(false) }}
                sx={
                    { textAlign: "center", maxWidth: "386px", fontWeight: "Bold", background: "var(--success)", alignItems: "center", borderRadius: "12px", widht: "100%" }
                }>
                <h1 className="w-full font-semibold text-quinto">{mensaje}</h1>
            </Alert >
        )
    } else {
        return (
            open &&
            <Alert
                variant="filled"
                severity="error"
                onClose={() => { setOpen(false) }}
                sx={{ textAlign: "center", maxWidth: "386px", fontWeight: "Bold", background: "var(--error)", alignItems: "center", borderRadius: "12px", widht: "100%" }}>
                <h1 className="w-full font-semibold text-tercero">{mensaje}</h1>
            </Alert>

        )
    }
}

export default Alerta;
