class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
  
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username/password"], status: 422
    end
  end

  def destroy
    logout
    render json: {}
  end
end


# Can test on Chrome with ajax request.

# $.ajax({ 
  # method:"POST", 
  # url:"api/session", 
  # data:{user :{username:"mark", password:"123123"}}})

# this will invoke 'create' method of sessions_controller
