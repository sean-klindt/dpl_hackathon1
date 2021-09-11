class LocationsController < ApplicationController
  before_action :set_trip

  def index
    @locations = @trip.locations.all
    render component: 'Locations', props: {locations: @locations, trips: @trips}
  end

  def show
    @location = @trip.locations.find(params[:id])
    render component: 'Location', props: {location: @location, trip: @trip}
  end

  def new
    @location = @trip.locations.new
    render component: 'LocationNew', props: {location: @location, trip: @trip}
  end

  def create
    @location = @trip.locations.new(location_params)
    if @user.save
      redirect_to user_trips_path
    else
      render component: 'LocationNew', props: {location: @location, trip: @trip}
    end
  end

  def edit
    @location = @trip.locations.find(params[:id])
    render component: 'LocationEdit', props: {location: @location, trip: @trip}
  end

  def update
    @location = @trip.locations.find(params[:id])
    if @location.update(location_params)
      redirect_to user_trips_path
    else
      render component: 'LocationEdit', props: {location: @location, trip: @trip}
    end
  end

  def destroy
    @location = @trip.find(params[:id])
    @location.destroy
    redirect_to user_trips_path
  end

  private
  def set_trip
    @trip = Trip.find(params[:trip_id]) 
  end

  def location_params
    params.require(:location).permit(:name)
  end
end
