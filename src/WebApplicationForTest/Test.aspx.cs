using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplicationForTest
{
    public partial class Test : System.Web.UI.Page
    {
        protected List<UserMember> Members { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            int age;
            int.TryParse(Request.QueryString["age"], out age);
            Members = GetMembers();
            if (age != 0)
            {
                Members = Members.Where(m => m.Age > age).ToList();
            }
        }

        private List<UserMember> GetMembers()
        {
            return new List<UserMember>{
                new UserMember{
                    Name = "张三",
                    Age = 38,
                    Country = "中国"
                },
                new UserMember{
                    Name = "李四",
                    Age = 37,
                    Country = "中国"
                },
                new UserMember{
                    Name = "Lily",
                    Age = 20,
                    Country = "US"
                },
                new UserMember{
                    Name = "Lucy",
                    Age = 22,
                    Country = "US"
                }
            };
        }
    }

    public class UserMember
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Country { get; set; }
    }
}