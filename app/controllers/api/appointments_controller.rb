class Api::AppointmentsController < ApplicationController
before_action: :set_appointment, only: [:show, :destroy, :update]

def index
  render json: Appointment.all
end


def show
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
  if(@appointment.update(appointment_params))
    render json: @appointment
  else
    render json: {errors: @appointment.errors.full_message}, status: 422
  end
end


def destroy
  render json: @appointment.destroy 
end 

private 
def set_appointment
  @appointment = Appointment.find(params[:id])
end

def appointment_params
  params.require(:appointment).permit(:appointment_date)
end

end 