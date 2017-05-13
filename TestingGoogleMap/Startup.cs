using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TestingGoogleMap.Startup))]
namespace TestingGoogleMap
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
