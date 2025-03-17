using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
            
        }

        public DbSet<Owner> Owners { get; set; }
        public DbSet<Pet> Pets { get; set; }
        public DbSet<Vaccine> Vaccines { get; set; }
        public DbSet<PetVaccine> PetVaccines { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PetVaccine>()
                .HasKey(pv => new { pv.PetId, pv.VaccineId });

            modelBuilder.Entity<PetVaccine>()
                .HasOne(pv => pv.Pet)
                .WithMany(p => p.PetVaccines)
                .HasForeignKey(pv => pv.PetId);

            modelBuilder.Entity<PetVaccine>()
                .HasOne(pv => pv.Vaccine)
                .WithMany(v => v.PetVaccines) 
                .HasForeignKey(pv => pv.VaccineId);
        }
    }
}
