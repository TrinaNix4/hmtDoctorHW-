class Api::AppointmentsController < ApplicationController
before_action :set_appointment, only: [:show, :destroy, :update]

def index
  render json: Appointment.all
end


def show
  appointment = Appointment.find(params[:id])
  render json: @appointment
end

def create
  @appointment = Appointment.new(appointment_params)
  if(@appointment.save)
    render json: @appointment
  else
    render json: {errors: @appointment.errors.full_message}, status: 422
  end
end

def update
  appointment = Appointment.find(params[:id])
  if(@appointment.update(appointment_params))
    render json: @appointment
  else
    render json: {errors: @appointment.errors.full_message}, status: 422
  end
end


def destroy
  appointment = Appointment.find(params[:id])
  render json: @appointment.destroy 
end 

private 
def set_appointment
  @appointment = Appointment.find(params[:id])
end

def appointment_params
  params.require(:appointment).permit(:appointment_date, :physician_id, :patient_id)
end

def appointment_params_only_date
  params.require(:appointment).permit(:appointment_date)
end 
end 

# physician_id and patient_id required to create an appointment