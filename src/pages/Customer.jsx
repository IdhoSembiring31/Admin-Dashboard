import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Toolbar,
  Selection,
  Sort,
  Filter,
  Edit,
  Inject,
  ContextMenu,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

function Customer() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="page" title="Customer" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        allowSelection
        selectionSettings={{type:'Multiple', checkboxOnly:true}}
        editSettings={{allowDeleting:true,allowEditing:true}}
        width="auto"
        contextMenuItems={['Edit']}
        allowContextMenu
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Selection,Sort,Filter,Edit,ContextMenu, Toolbar]} />
      </GridComponent>
    </div>
  );
}

export default Customer;
