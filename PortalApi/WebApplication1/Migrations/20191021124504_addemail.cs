using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class addemail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Message",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsApproved",
                table: "Message",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Comment",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Message");

            migrationBuilder.DropColumn(
                name: "IsApproved",
                table: "Message");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Comment");
        }
    }
}
