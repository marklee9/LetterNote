class Api::TagsController < ApplicationController
  def create
    @tag = Tags.new(tags_params)
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end 
  end

  def show
    @tag = current_user.tag.find(params[:id])
    if @notebook
      render :show
    else
      render json: ["Notebook not found, Please try again."], status:404
    end
  end

  def index
    @tag = current_user.tags
  end

  def destroy
    @tag = current_user.notes.find(params[:id]).first
    if @tag
      @tag.destroy
      render :show
    else
      render json: ["Unauthorized access to/Non-existing tag"], status: 401
    end
  end

private
  def tags_params
    params.require(:tag).permit(:name)
  end
end
