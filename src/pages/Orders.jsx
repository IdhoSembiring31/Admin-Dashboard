import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import {
  ordersGrid,
  ordersData,
} from "../data/dummy";
import { Header } from "../components";

function Orders() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="page" title="Orders" />
      <GridComponent 
      id="gridcomp" 
      allowPaging
      allowResizing
      allowSorting
      allowContextMenu
      allowFiltering
      editSettings={{ allowEditing: true, allowDeleting: true }}
      filterSettings={{ type: 'CheckBox' }}
      contextMenuItems={['AutoFit', 'SortAscending', 'Edit', 'Delete']}
      dataSource={ordersData}

>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            PdfExport,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
}

export default Orders;
