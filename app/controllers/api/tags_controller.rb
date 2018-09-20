class Api::TagsController < ApplicationController
  def create
    @tag = Tags.new(tags_params)
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end 
  end

  def show
    @tag = current_user.tag.find(params[:id])
    if @tag
      render :show
    else
      render json: ["Tag not found, Please try again."], status:404
    end
  end

  def update
    @tag = current_user.tags.find(params[:id])
    if @tag
      if @tag.update(tag_params)
        render :show
      else
        render json: @tag.errors.full_messages, status: 400
      end
    else
      render json: ["tag note found"], status: 404
    end
  end

  def index
    @tags = current_user.tags
  end

  def destroy
    @tag = current_user.notes.find(params[:id])
    if @tag
      @tag.destroy
      render :show
    else
      render json: ["Unauthorized access to tag"], status: 401
    end
  end

private
  def tags_params
    params.require(:tag).permit(:name)
  end
end
