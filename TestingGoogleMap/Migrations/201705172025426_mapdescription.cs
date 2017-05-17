namespace TestingGoogleMap.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mapdescription : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Maps", "Description", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Maps", "Description");
        }
    }
}
