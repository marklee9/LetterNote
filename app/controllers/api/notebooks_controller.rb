class Api::NotebooksController < ApplicationController
  def create
    @notebook = Notebook.new(notebook_params)
    debugger
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 406
    end 
  end

  def show
    @notebook = current_user.notebooks.where(id: params[:id]).first
    if @notebook
      render :show
    else
      render json: ["Notebook not found, Please try again."], status:404
    end
  end

  def index
    @notebooks = current_user.notebooks
  end

  def destroy
    @notebook = current_user.notebooks.where(id: params[:id]).first
    if @notebook
      @notebook.destroy
      render :show
    else
      render json: ["Could not delete your notebook."], status: 406
    end
  end

private
  def notebook_params
    params.require(:notebook).permit(:title)
  end
end
