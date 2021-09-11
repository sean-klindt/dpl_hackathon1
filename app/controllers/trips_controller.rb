class TripsController < ApplicationController
  before_action :set_user
  
  def index
    @trips = @user.trips
    render component: 'Trips', props: {trips: @trips, user: @user}
  end

  def show
    @trip = @user.trips.find(params[:id])
    render component: '@user.trips', props: {trip: @trip, user: @user}
  end

  def new
    @trip = @user.trips.new
    render component: 'TripNew', props: {trip: @trip, user: @user}
  end

  def create
    @trip = @user.trips.new(trip_params)
    if @trip.save
      redirect_to user_trips_path
    else
      render component: 'TripNew', props: {trip: @trip, user: @user}
    end
  end

  def edit
    @trip = @user.trips.find(params[:id])
    render component: 'TripEdit', props: {trip: @trip, user: @user}
  end

  def update
    @trip = @user.trips.find(params[:id])
    if @trip.update(user_params)
      redirect_to user_trips_path
    else
      render component: 'TripEdit', props: {trip: @trip, user: @user}
    end
  end

  def destroy
    @trip = @user.trips.find(params[:id])
    @trip.destroy
    redirect_to user_trips_path
  end

  private
  def trip_params
    params.require(:trip).permit(:name, :duration)
  end

  def set_user
    @user = User.find(params[:user_id])
  end
end
