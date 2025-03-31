﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotNETify.Migrations
{
    /// <inheritdoc />
    public partial class AddCoverUrl : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
           migrationBuilder.AddColumn<string>(
           name: "CoverUrl",
           table: "Songs",
           type: "text",
           nullable: true,  
           defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
               name: "CoverUrl",
               table: "Songs");
        }
    }
}
