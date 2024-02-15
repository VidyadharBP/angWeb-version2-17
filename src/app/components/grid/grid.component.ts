import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AgGridAngular,HttpClientModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})


export class GridComponent  {

  userList:any;
  colDefs: ColDef[] = [
    {field: "id", headerName:"Emp-id", cellRenderer:(data:any)=>{
      return "Emp-"+data.value
    },
    checkboxSelection:true,
    headerCheckboxSelection:true,
  },
    { field: "name", headerName:"Name", filter: true, },
    { field: "username", headerName:"User Name" },
    { field: "email", headerName:"E-mail", editable:true }
  ];

  defColDef = {
    flex :1,
    minWidth:100
  }

  public rowSelection: "single"|"multiple" = "multiple";

  constructor(private http :HttpClient) { }
  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(res=>{
      this.userList = res;
      console.log(this.userList);
    })
  }

}
