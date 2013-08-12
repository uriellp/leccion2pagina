require 'test_helper'

class Leccion3ControllerTest < ActionController::TestCase
  test "should get introduccion" do
    get :introduccion
    assert_response :success
  end

  test "should get objetos" do
    get :objetos
    assert_response :success
  end

  test "should get atributos" do
    get :atributos
    assert_response :success
  end

  test "should get metodos" do
    get :metodos
    assert_response :success
  end

  test "should get clases" do
    get :clases
    assert_response :success
  end

  test "should get constructores" do
    get :constructores
    assert_response :success
  end

  test "should get estrucProgra" do
    get :estrucProgra
    assert_response :success
  end

end
