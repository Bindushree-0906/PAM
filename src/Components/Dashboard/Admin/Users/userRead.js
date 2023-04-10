import React from 'react'
import { Table } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import  {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact'
  

function userRead() {
  return (
    <div>
        
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <CDBSidebar textColor="#fff" backgroundColor="#333">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        </CDBSidebarHeader> 
      <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/Roles" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Role</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/pmCreate" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Create PM</CDBSidebarMenuItem>
            </NavLink>
            
            </CDBSidebarMenu>
            </CDBSidebarContent>
            </CDBSidebar>
      
  <Table celled className = 'tc'> 
    <Table.Header className='th'>
      <Table.Row colspan='3'>
        <Table.HeaderCell colspan>Project-Manager id</Table.HeaderCell>
        <Table.HeaderCell >Project-Manager-Name</Table.HeaderCell>
        <Table.HeaderCell>Project Id</Table.HeaderCell>
        <Table.HeaderCell>Project Name</Table.HeaderCell>
        <Table.HeaderCell>Project Description</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    </Table>
    </div>
    </div>
  )
}

export default userRead