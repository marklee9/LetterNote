class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end


# Can test on Chrome with ajax request.

# $.ajax({ 
  # method:"POST", 
  # url:"api/users", 
  # data: {user :{username:"mark", password:"123123", email:"a@a.com"}}})

# this will invoke 'create' method of users_controller
