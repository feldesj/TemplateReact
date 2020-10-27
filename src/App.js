import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState([
    { constructeur: "Toyota", modele: "Celica", prix: 35000 },
    { constructeur: "Ford", modele: "Mondeo", prix: 32000 },
    { constructeur: "Porsche", modele: "Boxter", prix: 72000 },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 750, width: 1400 }}>
      <AgGridReact rowData={rowData}>
        <AgGridColumn field="constructeur"></AgGridColumn>
        <AgGridColumn field="modele"></AgGridColumn>
        <AgGridColumn field="prix"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default App;
