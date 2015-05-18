<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Test.aspx.cs" Inherits="WebApplicationForTest.Test" %>


<div>
    <% foreach (var member in Members)
       { %>
    <ul>
        <li>名称：<%= member.Name %></li>
        <li>年龄：<%= member.Age %></li>
        <li>国家：<%= member.Country %></li>
    </ul>
    <% } %>
</div>