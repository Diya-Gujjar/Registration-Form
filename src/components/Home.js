import React from "react";
import Table from "./Table";

const Home = ({ tableData }) => {
    return (
        <div>
            <h1>Hii User 😎</h1>
            <p className="txt">
                All Done!!! 👍<br/> Have a Great Day Ahead😊 <br/>
            </p>
            <h2>Here are the User's Details...</h2>
            <Table tableData={tableData} />
        </div>
    )
}

export default Home;