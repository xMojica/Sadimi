import React, { useContext } from "react";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import { Context } from "../../Context/main";

function Alerta({ tipo, mensaje }) {
    const { open, setOpen } = useContext(Context);

    if (tipo == "Success") {
        return (
            <Collapse in={open}>
                <Alert
                    icon={<CheckIcon sx={{ color: "#4c7766" }} fontSize="inherit" />}
                    sx={{ mb: 2, alignItems: "center", background: "#cce5db", borderRadius: "16px" }}
                    action={
                        <IconButton
                            size="medium"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" sx={{ color: "#4c7766" }} />
                        </IconButton>
                    }
                >
                    <h1 className="font-semibold text-primero">{mensaje}</h1>
                </Alert>
            </Collapse>
        )
    } else {
        return (
            <Collapse in={open}>
                <Alert
                    icon={<DoDisturbIcon sx={{ color: "var(--tercero)" }} fontSize="large" />}
                    sx={{
                        mb: 2, alignItems: "center", background: "var(--cuarto)", borderRadius: "16px"
                    }}
                    action={
                        <IconButton
                            size="medium"
                            onClick={() => { setOpen(false) }}
                        >
                            <CloseIcon fontSize="inherit" sx={{ color: "var(--tercero)" }} />
                        </IconButton>
                    }
                >
                    <h1 className="font-semibold text-tercero">{mensaje}</h1>
                </Alert>
            </Collapse >
        )
    }
}

export default Alerta;
