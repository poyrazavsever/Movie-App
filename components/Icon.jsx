import React from "react";
import * as Ionic5 from "react-icons/io5";
import * as Ai from "react-icons/ai";
import * as Bi from "react-icons/bi";
import * as Ci from "react-icons/ci";
import * as Si from "react-icons/si";
import * as Fi from "react-icons/fi";
import * as Sl from "react-icons/sl";
import * as Fa from "react-icons/fa";

const ReactIcon = (props) => {

    const {
        iconName,
        iconType,
        iconColor = "text-zinc-500",
        classname = "",
    } = props;

    let icon = "";
    if (iconName !== null && iconName !== "") {
        switch (iconType) {
            case "ionic5":
                icon = React.createElement(Ionic5[iconName]);
                break;
            case "ai":
                icon = React.createElement(Ai[iconName]);
                break;
            case "bi":
                icon = React.createElement(Bi[iconName]);
                break;
            case "si":
                icon = React.createElement(Si[iconName]);
                break;
            case "ci":
                icon = React.createElement(Ci[iconName]);
                break;
            case "fi":
                icon = React.createElement(Fi[iconName]);
                break;
            case "sl":
                icon = React.createElement(Sl[iconName]);
                break;
            case "fa":
                icon = React.createElement(Fa[iconName]);
                break;
            default:
                break;
        }
    }

    return (
        <span className={`${classname.toString()} ${iconColor.toString()}`}>
            {icon}
        </span>
    );
};

export default ReactIcon;