class Api::NotebooksController < ApplicationController
  def create
    @notebook = Notebook.new(notebook_params)
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end 
  end

  def show
    @notebook = current_user.notebooks.find(params[:id])
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
    @notebook = current_user.notebooks.find(params[:id])
    if @notebook
      @notes = @notebook.notes.map{|note| note.id}
      @notebook.notes.each do |note|
        note.destroy
      end
      @notebook.destroy
      render :show
    else
      render json: ["Could not delete your notebook."], status: 422
    end
  end

private
  def notebook_params
    params.require(:notebook).permit(:title, :author_id)
  end
end
