using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// TODO Moved to Data folder
namespace SimpleSearch.Shared
{
  public class ResultModel
  {
  }

  class Pokemon : ResultModel
  {
    public string name { get; set; }
    public string url { get; set; }
  }

  class StarWars : ResultModel
  {
    public string name { get; set; }
  }


  class ResultModelRoot<T> where T : ResultModel
  {
    public bool Error { get; set; }
    public List<T> results { get; set; }
  }


}
