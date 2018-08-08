class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user["username"] = user_params["email"].split("@")[0]
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

private
  def user_params
    # user only gives email but will use word before @ to set it as username.
    params.require(:user).permit(:email, :password)
  end
end


# Can test on Chrome with ajax request.

# $.ajax({
#   method:"POST", 
#   url:"api/users", 
#   data: {user :{password:"123123", email:"a@a.com"}}})

# this will invoke 'create' method of users_controller
