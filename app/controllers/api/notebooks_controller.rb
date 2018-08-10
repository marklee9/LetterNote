class Api::NotebooksController < ApplicationController
  def create
    @notebook = Notebook.new(notebook_params)
  end

  def show
    debugger
    @notebook = current_user.notebooks.where(id: params[:id])
  end

  def index
    @notebooks = current_user.notebooks
  end

  def destroy
    @notebook = current_user.notebooks.where(id: params[:id])
  end

private
  def notebook_params
    params.require(:notebook).permit(:title)
  end
end
