json.notebook do
  json.partial! "api/notebooks/notebook", notebook: @notebook
end

json.notes @notes