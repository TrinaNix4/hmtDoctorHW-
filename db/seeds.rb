# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Appointment.destroy_all
Physician.destroy_all
Patient.destroy_all
 

phy1 = Physician.create(name:"Dr. Ouhe-Shewt")
phy2 = Physician.create(name:"Dr. Smith")
phy3 = Physician.create(name:"Dr. Johnson")

pat1 = Patient.create(name:"Uhm Lastnametew")
pat2 = Patient.create(name:"Billy Antimmy")
pat3 = Patient.create(name:"Jonesey Lastnameh")

# Appointment.create(appointment_date:"2015-03-25", patient_id:pat1.id, physician_id:phy1.id )
# Appointment.create(appointment_date:"2015-04-26", patient_id:pat2.id, physician_id:phy2.id)
# Appointment.create(appointment_date:"2015-05-27", patient_id:pat3.id, physician_id:phy3.id)


puts "physician size: #{Physician.all.length}"
puts "patient size: #{Patient.all.length}"
puts "appointment size: #{Appointment.all.length}"
