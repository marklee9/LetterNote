class Api::NotebooksController < ApplicationController
  def create
    @notebook = Notebook.new()
  end

  def show
  end

  def destroy
  end

private
  def notebook_params
  end
end
