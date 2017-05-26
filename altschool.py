
from flask import Flask, render_template, request, jsonify


app = Flask(__name__)
app.secret_key = "ABC"


@app.route('/')
def homepage():
    """Register page."altschool.html"""
    print "working"
    return render_template("altschool.html")


@app.route('/homepage', methods=['POST'])
def get_form():
    rows = request.form.get("rows")
    columns = request.form.get("columns")
    return render_template("altschool_grid.html", rows=rows, columns=columns)


@app.route('/postmethod', methods=['GET', 'POST'])
def get_post_javascript_data():
    filename = open('templates/saved.html', "w")
    filename.seek(0)
    filename.truncate()
    filename = open('templates/saved.html', 'w')
    jsdata = request.form.get('html').encode('utf-8')
    html_begin = "<!doctype html><html><head><link href='/static/style.css' rel='stylesheet'></head><body><table class='grid'>"
    html_end = '</table></body></html>'
    message = html_begin + jsdata + html_end
    filename.write(message)
    filename.close()
    return jsonify(jsdata)


@app.route('/show_saved')
def show_saved():
    return render_template('saved.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
