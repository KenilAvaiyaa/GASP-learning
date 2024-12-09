
### 1. Install Python and MySQL
Ensure Python and MySQL are installed on your system:
- Python: [Download Python](https://www.python.org/)
- MySQL: [Download MySQL](https://dev.mysql.com/downloads/)

### 2. Clone the Project
Download the project files:
```bash
git clone <repository-url>
cd bank-management-system
```

### 3. Install Required Python Packages
Install dependencies using `pip`:
```bash
pip install -r requirements.txt
```

### 4. Set Up the MySQL Database
1. Open the MySQL console or a database tool (like phpMyAdmin).
2. Create a database:
   ```sql
   CREATE DATABASE project CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
   ```
3. Update database credentials in `app.py`:
   ```python
   db_config = {
       'host': 'localhost',
       'user': 'root',
       'password': 'your_password',  # Replace with your MySQL password
       'database': 'project'
   }
   ```
4. Run the `schema.sql` file to create the database tables:
   ```bash
   mysql -u root -p project < schema.sql
   ```

### 5. Run the Application
Start the Flask application:
```bash
python app.py
```
Access the application in your browser at `http://127.0.0.1:5000`.

