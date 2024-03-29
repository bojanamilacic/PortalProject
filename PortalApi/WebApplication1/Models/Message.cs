﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Message
    {
        public int MessageId  {get; set; }
        public string TextMessage { get; set; }
        public DateTime CurrentDate { get; set; }
        public IList<Comment> ListOfComments { get; set; }
        public Message()
        {
            CurrentDate = DateTime.Now;
        }
        public string Email { get; set; }
        public bool IsApproved { get; set; }
        public string Group { get; set; }
        public bool IsDeleted { get; set; }

    }
}
