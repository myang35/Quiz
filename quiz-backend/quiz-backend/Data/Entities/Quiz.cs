using System;
using System.Collections.Generic;

namespace quiz_backend.Models
{
    public class Quiz
    {
        public int ID { get; set; }
        public string Title { get; set; }
		public DateTime Creation { get; set; }
		public int PlayCount { get; set; }

		public string OwnerId { get; set; }
    }
}
