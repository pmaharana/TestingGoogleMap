namespace TestingGoogleMap.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changedMapclass : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Maps", "Lat", c => c.Double());
            AlterColumn("dbo.Maps", "Long", c => c.Double());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Maps", "Long", c => c.String());
            AlterColumn("dbo.Maps", "Lat", c => c.String());
        }
    }
}
