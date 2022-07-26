class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :visits
  has_many :places, through: :visits

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
