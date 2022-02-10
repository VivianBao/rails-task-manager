require_relative '../models/task'

class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def show
    @task = Task.find(params[:id])
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      redirect_to root_path
    else
      render new_task_path
    end
  end

  def update
    # byebug
    Task.find(params[:id]).update(task_params)
    redirect_to root_path
    respond_to do |format|
     format.html { redirect_to request.referrer }
     format.js {}
     format.json
    end
  end

  def edit
    @task = Task.find(params[:id])
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to root_path
  end

  private

  def task_params
    params.require(:task).permit(:title, :details, :completed)
  end
end
