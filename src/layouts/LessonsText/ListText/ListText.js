import React from "react";

function ListText({ lessonsData }) {
    return (
        <div
            style={{ display: "flex", marginLeft: "600px", marginTop: "100px" }}
        >
            {lessonsData.map((item, i) => (
                <iframe
                    key={i}
                    src={item.src}
                    width="790"
                    height="780"
                    frameborder="0"
                ></iframe>
            ))}
        </div>
    );
}

export default ListText;
