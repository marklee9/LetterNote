class Api::NotesController < ApplicationController
  def create
    @note = Note.new(note_params)
    @note.author_id = current_user.id
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 406
    end 
  end

  def show
    @note = current_user.notes.find(params[:id])
    if @note
      render :show
    else
      render json: ["Note not found, Please try again."], status:404
    end
  end

  def update 
    @note = current_user.notes.find(params[:id])
    @note.title = note_params[:title]
    @note.body = note_params[:body]
    if @note.save
      render :show
    else
      render json: ["Could not update your note, please try again"], status:404
    end
  end

  def index
    @notes = current_user.notes
  end

  def destroy
    @note = current_user.notes.find(params[:id])
    if @note
      @note.destroy
      render :show
    else
      render json: ["Could not delete your note."], status: 406
    end
  end

private
  def note_params
    params.require(:note).permit(:title, :notebook_id, :body)
  end
end
