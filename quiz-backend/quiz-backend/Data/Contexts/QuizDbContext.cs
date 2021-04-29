using System;
using Microsoft.EntityFrameworkCore;
using quiz_backend.Models;

namespace quiz_backend
{
    public class QuizDbContext : DbContext
    {
        public QuizDbContext(DbContextOptions<QuizDbContext> options) : base(options) {}

        public DbSet<Models.Question> Questions { get; set; }

        public DbSet<quiz_backend.Models.Quiz> Quizzes { get; set; }
    }
}
