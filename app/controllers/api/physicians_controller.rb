class Api::PhysiciansController < ApplicationController
  before_action :set_physician, only: [:show, :destroy, :update]
  
def index
  render json: Physician.all
end

def show
  render json: @Physician
end

def create 
  @physician = Physician.new(physician_params)
  if(@physician.save)
    render json: @physician
  else
    render json: {errors: @physician.errors.full_messages}, status: 422
  end
end 

def update 
 if(@physician.update(physician_params))
    render json: @physician
  else
    render json: {errors: @physician.errors.full_messages}, status: 422
  end
end 

def destroy
  render json: @physician.destroy
end 

private
def set_physician
    @physician = Physician.find(params[:id])
end

def user_params
  params.require(:physician).permit(:name)
end



end
