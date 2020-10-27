import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import MongoDB from "mongodb";

import express from "express";
const app = express();

const url = "cluster0-shard-00-02.kaotp.mongodb.net:27017";
const name = "3r3_dev-Cloud MongoDB";

const db = "admin";
const user = "dev";
const password = "l3iEWni76t3km5p5";

// const App = () => {
// 	const [gridApi, setGridApi] = useState(null);
// 	const [gridColumnApi, setGridColumnApi] = useState(null);

// 	const [rowData, setRowData] = useState([
// 		{ constructeur: "Toyota", modele: "Celica", prix: 35000 },
// 		{ constructeur: "Ford", modele: "Mondeo", prix: 32000 },
// 		{ constructeur: "Porsche", modele: "Boxter", prix: 72000 },
// 	]);

// 	return (
// 		<div className="ag-theme-alpine" style={{ height: 750, width: 1400 }}>
// 			<AgGridReact rowData={rowData}>
// 				<AgGridColumn field="constructeur"></AgGridColumn>
// 				<AgGridColumn field="modele"></AgGridColumn>
// 				<AgGridColumn field="prix"></AgGridColumn>
// 			</AgGridReact>
// 		</div>
// 	);
// };

export default App;
